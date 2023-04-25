import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tile from "./Tile";
import { useEffect } from "react";
import axios from "axios";
import { addDataByApi, addDataByApiByName, loadDataIntoSlice } from "../redux/slices/products";

const Home = () => {
  const products = useSelector((state) => state.product);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDataByApiByName());
    dispatch(addDataByApi())
  }, []);

  return (
    <div className="flex flex-row flex-wrap p-8 bg-slate-300  gap-2">
      {products?.map((e) => {
        return <Tile data={e} key={e.id} />;
      })}
    </div>
  );
};

export default Home;
