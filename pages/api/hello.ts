// visit http://localhost:3000/api/hello

import { NextApiHandler } from "next";

const hello: NextApiHandler = (req, res) => {
  res.status(200).json({
    hello: "it's me"
  });
};

export default hello;
