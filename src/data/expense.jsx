import { FaHome, FaUtensils, FaTaxi, FaFilm, FaShoppingCart, FaEllipsisH } from 'react-icons/fa';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const expensesBreakdowns = [
  {
    id: 1,
    category: "Housing",
    amount: 250,
    percentage: 15,
    icon: <FaHome />,
    arrow: <FaArrowDown />,
  },
  {
    id: 2,
    category: "Food",
    amount: 350,
    percentage: 8,
    icon: <FaUtensils />,
    arrow: <FaArrowUp />,
  },
  {
    id: 3,
    category: "Transportation",
    amount: 50,
    percentage: 12,
    icon: <FaTaxi />,
    arrow: <FaArrowUp />,
  },
  {
    id: 4,
    category: "Entertainment",
    amount: 80,
    percentage: 15,
    icon: <FaFilm />,
    arrow: <FaArrowUp />,
  },
  {
    id: 5,
    category: "Shopping",
    amount: 420,
    percentage: 25,
    icon: <FaShoppingCart />,
    arrow: <FaArrowDown />,
  },
  {
    id: 6,
    category: "Others",
    amount: 650,
    percentage: 23,
    icon: <FaEllipsisH />,
    arrow: <FaArrowDown />,
  },
];

export default expensesBreakdowns;

export const expensesStatistics = [
  {
    id: 1,
    date: "17 Sun",
    amountThisWeek: 250000,
    amountLastWeek: 50000,
  },
  {
    id: 2,
    date: "18 Mon",
    amountThisWeek: 50000,
    amountLastWeek: 10000,
  },
  {
    id: 3,
    date: "19 Tue",
    amountThisWeek: 10000,
    amountLastWeek: 50000,
  },
  {
    id: 4,
    date: "20 Wed",
    amountThisWeek: 50000,
    amountLastWeek: 50000,
  },
  {
    id: 5,
    date: "21 Thu",
    amountThisWeek: 50000,
    amountLastWeek: 10000,
  },
  {
    id: 6,
    date: "22 Fri",
    amountThisWeek: 250000,
    amountLastWeek: 10000,
  },
  {
    id: 7,
    date: "23 Sat",
    amountThisWeek: 50000,
    amountLastWeek: 10000,
  },
];
