import { NextApiHandler } from "next";

const data = [
  { id: 1, name: "Wan" },
  { id: 2, name: "Zhen" },
  { id: 3, name: "Tian" },
  { id: 4, name: "Good" }
];

const user: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const userData = data.find(x => String(x.id) === String(id));

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).end();
  }
};

export default user;
