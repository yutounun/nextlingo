import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  // console.log(t("title"));
  return <h3>{t("title")}</h3>;
}
