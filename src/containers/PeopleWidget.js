import React from "react";
import PeopleList from "../components/PeopleList";
import PersonView from "../components/PersonView";

function PeopleWidget() {
  return (
    <div className='people-widget'>
      <PeopleList />
      <PersonView />
    </div>
  );
}


export default PeopleWidget;
