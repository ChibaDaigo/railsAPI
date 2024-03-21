
import { FC } from 'react';
import Link from 'next/link';

type Account = {
  name: string;
  email: string;
  password_digest: string;
  tel: string;
  role: string;
};
async function getAccount() {
  const res = await fetch('http://back:3000/accounts', { cache: "no-store" });

  if (!res.ok) {
    throw new Error('Failed to fetch Post');
  }

  return res.json();
}

const Home: FC = async () => {
  const accounts: Account[] = await getAccount();
  console.log(accounts);
  return (
    <div>
      <h1>Account List</h1>
      <Link href={"/account"}>アカウント登録ページへ</Link>
      <hr></hr>
      <Link href={"/"}>トップページへ</Link>
      {accounts && accounts.map((account) => (
        <p key={account.email}>
          {account.name}
          {
            account.role === "user" ? "一般" : "管理者"
            }
        </p>
      ))}
    </div>
  );
};

export default Home;