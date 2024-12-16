import { createModalHook, Modal, TModalProps } from "@shared/modal";
import s from "./style.module.scss";
import { Button } from "@components/button";
import { PhoneInput } from "@components/phone-input";
import { CloseIcon } from "@shared/icons";

const AuthModal = ({ onClose }: TModalProps) => {
  return (
    <Modal.Root>
      <Modal.Content onClose={onClose}>
        <div className={s.modal}>
          <CloseIcon onClick={onClose} className={s.modalCloseIcon} />
          <div className={s.modalHeader}>
            <div className={s.modalHeaderTitle}>
              Вход в аккаунт
              <p>
                Введите номер телефона или почту, чтобы войти или
                зарегистрироваться
              </p>
            </div>
            <img
              className={s.modalHeaderImage}
              src="/images/auth-modal.png"
              alt="auth-modal"
            />
          </div>

          <PhoneInput
            className={s.modalInput}
            placeholder="your_email@gmail.com"
          />

          <p>ИЛИ</p>

          <PhoneInput
            className={s.modalInput}
            placeholder="+7 (915) XXX-XX-XX"
          />

          <div className={s.modalLastActions}>
            <Button className={s.buttonSubmit} text="Получить код" />
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
};

export const useAuthModal = createModalHook<TModalProps>((props) => (
  <AuthModal {...props} />
));
