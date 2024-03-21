"use client";
import { FC, useEffect } from 'react';
import { useForm } from "react-hook-form";
import styles from './page.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';
import axios from 'axios';
type Account = {
  name: string;
  email: string;
  password_digest: string;
  tel: string;
  role: string;
};
const schema = z.object({
  name: z.string().min(1, { message: "REQUIRED NAME"}),
  email: z.string().email().min(1, { message: "REQUIRED EMAIL" }),
  password_digest: z.string().min(4, { message: "REQUIRED PASSWORD" }),
  tel: z.string().min(1, { message: "REQUIRED TEL"}),
  role: z.enum(["user","admin"])
})
const Account: FC = () => {
  const {
    register,// each key
    handleSubmit,// submit 時の挙動
    formState: { errors },
  } = useForm<Account>({
    resolver: zodResolver(schema, undefined, {raw: true}),
  });
  //submit 時の挙動
  const onSubmit = async (data:Account) => {
    const baseURL = `${process.env.NEXT_PUBLIC_API_BASEURL}/accounts`;
    const requestOptions = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
    try {
      await fetch(baseURL, requestOptions).then((res) => {
        console.log(res.json());
      })
    } catch (error){
      console.log(error);
    };
  };
  return (
    <div className={styles.container}>
      <h1>アカウント登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.column}>
          <label>名前</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>{ errors.name?.message }</span>}
        </div>
        <div className={styles.column}>
          <label>メールアドレス</label>
          <input {...register("email")} />
          {errors.email && <span>{ errors.email?.message }</span>}
        </div>
        <div className={styles.column}>
          <label>パスワード</label>
          <input {...register("password_digest", { required: true })} />
          {errors.password_digest && <span>{ errors.password_digest?.message }</span>}
        </div>
        <div className={styles.column}>
          <label>電話番号</label>
          <input {...register("tel", { required: true })} />
          {errors.tel && <span>{ errors.tel?.message }</span>}
        </div>
        <div className={styles.column}>
          <label>役割</label>
          <select {...register("role", { required: true })}>
            <option value="user">ユーザー</option>
            <option value="admin">管理者</option>
          </select>
          {errors.role && <span>{ errors.role?.message }</span>}
        </div>
        <div className={styles.button}><button type="submit" >登録</button></div>
      </form>
      <Link href={"/accountlist"}>アカウントリストページへ</Link>
    </div>
  );
}




export default Account;