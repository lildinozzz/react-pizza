import { useState } from "react";
import { z, ZodIssue } from "zod";
import { Button } from "@components/button";
import { Input } from "@app/components/input";
import { CloseIcon } from "@shared/icons";
import { useAppDispatch } from "@app/store/hooks";
import { authenticate } from "@app/store/reducers/user-info/reducers";
import s from "./style.module.scss";
import { createModalHook, Modal, TModalProps } from "@shared/modal";
import { toast } from "react-toastify";

type TFormState = {
  email: string;
  password: string;
};

type TErrorState = TFormState;

const formSchema = z.object({
  email: z
    .string()
    .email("Некорректный email")
    .min(1, "Email не может быть пустым"),
  password: z.string().min(1, "Пароль не может быть пустым"),
});

const AuthModal = ({ onClose }: TModalProps) => {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<TFormState>({
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState<TErrorState>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name in errorState) {
      setErrorState((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse(formState);

    if (!result.success) {
      const newErrors: TErrorState = {
        email: "",
        password: "",
      };

      result.error.errors.forEach((err: ZodIssue) => {
        const field = String(err.path[0]);
        if (field in newErrors) {
          newErrors[field as keyof TErrorState] = err.message;
        }
      });

      setErrorState(newErrors);
      return;
    }

    dispatch(authenticate(formState));

    toast.success("Вы успешно вошли", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
    });

    onClose();
  };

  return (
    <Modal.Root>
      <Modal.Content onClose={onClose}>
        <form onSubmit={onSubmit} className={s.modal}>
          <CloseIcon onClick={onClose} className={s.modalCloseIcon} />
          <div className={s.modalHeader}>
            <div className={s.modalHeaderTitle}>
              Вход в аккаунт
              <p>Введите почту, чтобы войти или зарегистрироваться</p>
            </div>
            <img
              className={s.modalHeaderImage}
              src="/images/auth-modal.png"
              alt="auth-modal"
            />
          </div>

          <Input
            label="Email"
            isError={!!errorState.email}
            errorMessage={errorState.email}
            className={s.modalInput}
            placeholder="your_email@gmail.com"
            name="email"
            onChange={handleInputChange}
            value={formState.email}
          />

          <Input
            label="Password"
            isError={!!errorState.password}
            errorMessage={errorState.password}
            className={s.modalInput}
            placeholder="your_password"
            name="password"
            onChange={handleInputChange}
            value={formState.password}
          />

          <div className={s.modalLastActions}>
            <Button
              type="submit"
              className={s.buttonSubmit}
              text={"Получить код"}
            />
          </div>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
};

export const useAuthModal = createModalHook<TModalProps>((props) => (
  <AuthModal {...props} />
));
