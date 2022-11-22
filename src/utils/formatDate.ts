import { format } from "date-fns";

const formatDate = (date: string) => {
	return format(new Date(date), "dd/MM/yyyy");
};

export default formatDate;
