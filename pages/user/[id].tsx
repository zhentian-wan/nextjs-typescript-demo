import { useRouter } from "next/router";

const user = () => {
  const router = useRouter();
  const { id, ...rest } = router.query;

  return (
    <div>
      <h2>User id is {id}</h2>
      <p>{JSON.stringify(rest, null, 2)}</p>
    </div>
  );
};

export default user;
