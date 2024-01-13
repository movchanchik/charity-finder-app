import React from "react";
interface Params {
  ein: string;
}

const CharityPage = ({ params }: { params: Params }) => {
  return <div>CharityPage {params.ein}</div>;
};

export default CharityPage;
