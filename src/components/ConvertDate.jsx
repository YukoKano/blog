import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

// defaukt export しなくていい
export const ConvertDate = ({ dateISO }) => {
  const date = parseISO(dateISO);
  return (
    <time dateTime={dateISO}>
      {format(date, "yyyy年MM月dd日", { locale: ja })}
    </time>
  );
};
