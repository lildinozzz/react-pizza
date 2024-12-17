import { createModalHook, Modal, TModalProps } from "@shared/modal";
import s from "./style.module.scss";
import { Button } from "@components/button";
import { Input } from "@app/components/input";
import { CloseIcon } from "@shared/icons";
import { useAppDispatch } from "@app/store/hooks";
import { useState } from "react";
import { loginThunk } from "@app/store/slices/auth/authThunks";
import { TAuthForm } from "@shared/types/auth/auth";

const AuthModal = ({ onClose }: TModalProps) => {
  const dispatch = useAppDispatch();

  const [values, setValue] = useState<TAuthForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginThunk(values));
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
            className={s.modalInput}
            placeholder="your_email@gmail.com"
            name="email"
            onChange={handleInputChange}
          />

          <Input
            className={s.modalInput}
            placeholder="your_password"
            name="password"
            onChange={handleInputChange}
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
