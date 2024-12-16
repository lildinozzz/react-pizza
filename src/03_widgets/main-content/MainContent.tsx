import s from "./style.module.scss";

export const MainContent = () => {
  return (
    <div className={s.wrapper}>
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index}>
          <div className={s.wrapperCard}>{index + 1}</div>
        </div>
      ))}
    </div>
  );
};
