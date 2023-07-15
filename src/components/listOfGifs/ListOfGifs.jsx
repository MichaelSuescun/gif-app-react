import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getGifs from "../../services/getGifs";
import './styles.css'

const ListOfGifs = ({search}) => {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({
      limit: 10,
      searchWord: search['word'],
      rating: search['rating']
    }).then(response => setGifs(response))
  }, [search])

  return (
    <div className="gifs-container">
      {gifs.map(gif => {
        return(
          <div className="gifs-container__gif" key={gif['id']}>
            <img src={gif['images']['original']['webp']} alt="" />
          </div>
        )
      })}
    </div>
  );
};

ListOfGifs.propTypes = {
  search: PropTypes.object
}

export default ListOfGifs