import React from "react";

import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import EventList from "../Admin/EventList";
import EventDetails from "../Admin/EventDetails";
import AddEditEvent from "../Admin/AddEditEvent";
import EventCalendar from "../Admin/EventCalendar";
import UserManagement from "../Admin/UserManagement";

const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Eventcontent = () => {
  return (
    <div>
      <ApppContainer>
        <Sidebar />
        <MaincContent>
          <EventList />
          <EventDetails />
          <AddEditEvent />
          <EventCalendar />
        </MaincContent>
      </ApppContainer>
    </div>
  );
};

export default Eventcontent;
