import s from "components/Container/Container.module.css";

export default function Container({ children }) {
  return (
    <section className={s.container}>{children}</section>
  )
}