import { createModalHook, Modal, TModalProps } from "@shared/modal";
import s from "./style.module.scss";
import { Button } from "@components/button";
import { Input } from "@app/components/input";
import { CloseIcon } from "@shared/icons";
import { useState } from "react";
import { z, ZodIssue } from "zod";
import { useAppDispatch } from "@app/store/hooks";
import { authenticate } from "@app/store/reducers/user-info/reducers";

interface FormState {
  email: string;
  password: string;
}

interface ErrorState {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z
    .string()
    .email("Некорректный email")
    .min(1, "Email не может быть пустым"),
  password: z.string().min(1, "Пароль не может быть пустым"),
});

const AuthModal = ({ onClose }: TModalProps) => {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState<ErrorState>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorState({
      email: "",
      password: "",
    });
  };

  const resetValidation = () => {
    setFormState({
      email: "",
      password: "",
    });
  };

  const validateForm = () => {
    resetValidation();

    const result = formSchema.safeParse(formState);

    if (!result.success) {
      const newErrors: ErrorState = {
        email: "",
        password: "",
      };

      result.error.errors.reduce((acc: ErrorState, err: ZodIssue) => {
        const field = String(err.path[0]); // Преобразуем путь в строку
        if (field === "email" || field === "password") {
          acc[field] = err.message; // Присваиваем сообщение ошибки
        }
        return acc;
      }, newErrors);

      setErrorState(newErrors);

      return;
    }

    // Диспатчим успешную аутентификацию
    dispatch(authenticate(formState));

    // Закрываем модал
    onClose();
  };

  // Обработчик сабмита формы
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
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
            isError={!!errorState.email}
            errorMessage={errorState.email}
            className={s.modalInput}
            placeholder="your_email@gmail.com"
            name="email"
            onChange={handleInputChange}
          />

          <Input
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
