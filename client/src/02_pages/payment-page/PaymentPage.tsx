import { BoxIcon, DeliveryIcon, VatIcon } from "@shared/icons";
import s from "./style.module.scss";
import { PaymentButton } from "@app/components/payment-button";

export const PaymentPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperTitle}>Оформление заказа</div>
      <div className={s.wrapperContent}>
        <div className={s.wrapperPersonalInfo}>
          <div className={s.wrapperPersonalInfoCard}>1. Корзина</div>
          <div className={s.wrapperPersonalInfoCard}>
            2. Персональная информация
          </div>
          <div className={s.wrapperPersonalInfoCard}>3. Адрес доставки</div>
        </div>
        <div className={s.wrapperPaymentInfo}>
          <div className={s.wrapperPaymentInfoHeader}>Итого:</div>
          <div className={s.wrapperPaymentInfoPrice}>123 $</div>

          <div className={s.divider}></div>

          <div className={s.wrapperPaymentInfoCounter}>
            <div className={s.wrapperPaymentInfoCounterCard}>
              <BoxIcon className={s.wrapperPaymentInfoCounterCardIcon} />
              <div>Стоимость товаров:</div>
            </div>
            <div className={s.wrapperPaymentInfoCounterCard}>
              <VatIcon className={s.wrapperPaymentInfoCounterCardIcon} />
              <div> Налоги:</div>
            </div>
            <div className={s.wrapperPaymentInfoCounterCard}>
              <DeliveryIcon className={s.wrapperPaymentInfoCounterCardIcon} />
              <div>Доставка:</div>
            </div>
          </div>

          <div className={s.divider}></div>

          <div className={s.wrapperPaymentInfoSubmitButton}>
            <PaymentButton text="Перейти к оплате" />
          </div>
        </div>
      </div>
    </div>
  );
};
