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
          <h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              color: "grey",
              borderBottom: "1px solid black",
            }}
          >
            Duy Hậu - Đẹp trai nhất vũ trụ
          </h1>
        </div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
