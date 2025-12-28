import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <td className="td-img">
          <img src={coin.image} alt="coin image" className="coin-logo" />
        </td>
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
        {coin.price_change_percentage_24h > 0 ? (
          // green
          <td className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(3)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          // red
          <td className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(3)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
        <Tooltip title="Price Change in 24 Hr">
          <td>
            <h3
              className="coin-price td-current-price"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ₹{coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume">
          <td>
            <p
              className="total-volume td-totalVolume"
              style={{ color: "var(--grey)" }}
            >
              Total Volume : {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="desktop-td-mkt">
            <p
              className="total-volume td-marketCap"
              style={{ color: "var(--grey)" }}
            >
              Market Cap : ₹{coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="mobile-td-mkt">
            <p
              className="total-volume td-marketCap"
              style={{ color: "var(--grey)" }}
            >
              Market Cap : ₹{convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}

export default List;
