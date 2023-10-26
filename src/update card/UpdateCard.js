import React, { useState } from "react";
import Modal from "./Modal";

const UpdateCard = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex-row update-card border">
      <div className="flex-row">
        <span>
          <img
            src="https://s3-alpha-sig.figma.com/img/8db9/c6bc/56c97f45cd6ef095fbd9688e5d630ba0?Expires=1699228800&Signature=cFCNJ1K0EbINr9cc9hEnUVvNgpGC3qJ~fL6JrQM-TV9IE01h1sOEhp6FEO7mH~eJOGo2IuItxLYgNFJ6jGP5NZOAvdYxeuYTZGKtwdGOK8Hqj3XmYWzHfJ7wxt~3f9INY1nZkVD~wekIH49wM53hhOuvkvwg7baOxA32Z4gRMLhhPFxS8gaxR-Vho3cjBnmf5vT~2vpj2RvKqQujaQjhwsmlhzdCN9UWYDXqIXHuYAoQlGQ~rSxEsmuelCNiALwDhPKZTgVJJejSW3Od7zjNfUEMCWU6ULvEMZAF0ehHKb4TagEfUNsTfqhQbmIcw2G10ooRjH9NLplnS0Fqr2Yu7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            width={100}
          />
        </span>
        <span className="flex-col">
          <h2>Hypertext Markup Language</h2>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </span>
      </div>

      <button className="button-1" onClick={() => setModal(!modal)}>
        Update
      </button>
      {modal && <Modal setModal={setModal}/>}
    </div>
  );
};

export default UpdateCard;
