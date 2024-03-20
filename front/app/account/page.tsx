"use client";
import { FC, useEffect } from 'react';
import { useForm } from "react-hook-form";
import styles from './page.module.css';
import axios from 'axios';
type Account = {
  name: string;
  email: string;
  password_digest: string;
  tel: string;
  role: string;
};

const Account: FC = () => {
  const {
    register,// each key
    handleSubmit,// submit 時の挙動
    formState: { errors },
  } = useForm<Account>();
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
          {errors.name && <span>名前は必須です</span>}
        </div>
        <div className={styles.column}>
          <label>メールアドレス</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>メールアドレスは必須です</span>}
        </div>
        <div className={styles.column}>
          <label>パスワード</label>
          <input {...register("password_digest", { required: true })} />
          {errors.password_digest && <span>パスワードは必須です</span>}
        </div>
        <div className={styles.column}>
          <label>電話番号</label>
          <input {...register("tel", { required: true })} />
          {errors.tel && <span>電話番号は必須です</span>}
        </div>
        <div className={styles.column}>
          <label>役割</label>
          <select {...register("role", { required: true })}>
            <option value="user">ユーザー</option>
            <option value="admin">管理者</option>
          </select>
          {errors.role && <span>役割は必須です</span>}
        </div>
        <div className={styles.button}><button type="submit" >登録</button></div>
      </form>
    </div>
  );
}




export default Account;