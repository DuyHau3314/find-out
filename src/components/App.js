import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unpslash";
import ImageList from '../components/ImageList';


class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        page: 1,
        per_page: 1000,
        order_by: "latest",
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div>
          {" "}
          <h2
          >
            <p style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "10px",
              color: "grey",
              lineHeight: '1px'
            }}>DUY HẬU</p>
            <br />
             <p style={{
              textAlign: "center",
              color: "grey",
              lineHeight: '1px',
              marginBottom: "10px",

            }}>Đẹp trai nhất vũ trụ</p> 
          </h2>
        </div>
        <br />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
