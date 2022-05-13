import React from "react";
import { useState } from "react";
import MockData from '../mockdata.json';
import './styles.css';

MockData.sort(function (a, b) {
    if (a.harga === b.harga && a.rating > b.rating) {
      return b.rating - a.rating;
    } else if (a.rating === b.rating && a.likes > b.likes) {
      return b.likes - a.likes;
    } else {
      return a.harga - b.harga;
    }
});

function SortTable () {
    const [data] = useState(MockData)
    return(
        <div>
            <table>
                <thead>
                        <th>Namae</th>
                        <th>Harga</th>
                        <th>Rating</th>
                        <th>Likes</th>
                </thead>
                <tbody>
                    {data.map((d)=>(
                        <tr key={d.id}>
                            <td className="nama">{d.nama}</td>
                            <td>{d.harga}</td>
                            <td>{d.rating}</td>
                            <td>{d.likes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SortTable;