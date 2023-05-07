import { Box, Button, TextField } from "@mui/material";

import React, { useEffect } from "react";
import { useState } from "react";
import { axios } from "../../../config/axios";
import { useRouter } from "next/router";

interface IInputType {
  id: string;
  password: string;
}

const LoginForm = () => {
  const route = useRouter();

  const [inputValue, setInputValue] = useState<IInputType>({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", inputValue);

      if (res.status === 200) {
        route.push("/");
        alert("로그인이 완료되었습니다.");
      }

      console.info(res);
    } catch (e: any) {
      console.info(1);
    }
  };

  useEffect(() => {
    console.info(inputValue);
  }, [inputValue]);

  return (
    <Box
      sx={{
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        margin: "40px auto",
      }}
    >
      <TextField name="id" label="id" onChange={handleChange} />
      <TextField
        name="password"
        type="password"
        label="password"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleLogin}>
        로그인
      </Button>
    </Box>
  );
};

export default LoginForm;
