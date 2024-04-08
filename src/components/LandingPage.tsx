import React, { useState } from "react";
import MainHeader from "./MainHeader";
import Filters from "./Filters";
import TaskCards from "./TaskCards";
import BottomNavigationBar from "./BottomNavigationBar";
import CustomAlert from "./Alerts";
import SideMenu from "./SideMenu";

const LandingPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleNotifyStaff = () => {
    setShowAlert(true);
  };
  const taskData = [
    {
      id: "#68988",
      status: "Ongoing",
      duration: "20 min",
      workTitle: "Routine Cleaning",
      type: "Internal Task",
      date: "21 Jul 2024",
      taskTime: "3:00 am",
      from: "Pantry",
      To: "Reception",
      scheduled: true,
      recurring: true,
      accepted: false,
      delayed: false,
    },
    {
        id: "#68989",
        status: "Scheduled",
        duration: "20 min",
        workTitle: "Routine Cleaning",
        type: "Guest Task",
        date: "21 Jul 2024",
        taskTime: "3:00 am",
        from: "Pantry",
        To: "Reception",
        scheduled: true,
        recurring: true,
        accepted: false,
        delayed: false,
      },

    {
      id: "#68990",
      status: "Ongoing",
      duration: "1 min",
      workTitle: "Routine Cleaning",
      type: "Internal Task",
      date: "21 Jul 2024",
      taskTime: "3:00 am",
      from: "Pantry",
      To: "Reception",
      scheduled: true,
      recurring: true,
      accepted: false,
      delayed: true,
    },
    {
      id: "#68991",
      status: "Ongoing",
      duration: "20 min",
      workTitle: "Routine Cleaning",
      type: "Internal Task",
      date: "21 Jul 2024",
      taskTime: "3:00 am",
      from: "Pantry",
      To: "Reception",
      scheduled: true,
      recurring: false,
      accepted: true,
      delayed: false,
    },
    {
      id: "#68992",
      status: "Ongoing",
      duration: "20 min",
      workTitle: "Routine Cleaning",
      type: "Internal Task",
      date: "21 Jul 2024",
      taskTime: "3:00 am",
      from: "Pantry",
      To: "Reception",
      scheduled: true,
      recurring: true,
      accepted: false,
      delayed: false,
      requests: [
        {
          id: 1,
          itemName: "Shampoo",
          quantity: "x1",
          instructions: "",
        },
        {
          id: 2,
          itemName: "Conditioner",
          quantity: "x2",
          instructions: "Please Bring Conditioners",
        },
        {
          id: 3,
          itemName: "Towel",
          quantity: "x2",
          instructions: "",
        },
      ],
    },
    {
      id: "#68993",
      status: "History",
      duration: "20 min",
      workTitle: "Routine Cleaning",
      type: "Internal Task",
      date: "21 Jul 2024",
      taskTime: "3:00 am",
      from: "Pantry",
      To: "Reception",
      scheduled: true,
      recurring: true,
      accepted: false,
      delayed: true,
      onTime: false,
      complaint: true,
      rating: 1,
    },
    {
      id: "#68994",
      status: "Scheduled",
      duration: "20 min",
      workTitle: "Routine Cleaning",
      type: "Internal Task",
      date: "21 Jul 2024",
      taskTime: "3:00 am",
      from: "Pantry",
      To: "Reception",
      scheduled: true,
      recurring: true,
      accepted: false,
      delayed: false,
    },
    {
        id: "#68995",
        status: "History",
        duration: "20 min",
        workTitle: "Routine Cleaning",
        type: "Internal Task",
        date: "21 Jul 2024",
        taskTime: "3:00 am",
        from: "Pantry",
        To: "Reception",
        scheduled: true,
        recurring: true,
        accepted: false,
        delayed: true,
        onTime: true,
        complaint: true,
        rating: 3,
      },
  ];

  return (
    <div className="flex justify-start flex-col">
      <MainHeader />
      {showAlert && (
        <CustomAlert
          message="Staff was Notified"
          onClose={() => {
            setShowAlert(!showAlert);
          }}
        />
      )}
      <div className="md:flex md:flex-row ">
        <div className="hidden md:block md:w-56">
          <SideMenu />
        </div>
        <div className="md:flex md:flex-col">
          <Filters />
          <div className="h-fit mb-20 md:grid md:grid-cols-3 md:gap-x-1">
            {taskData.map((items) => {
              return (
                <div className="md:wrap">
                  <TaskCards
                    key={items.id}
                    id={items.id}
                    currentStatus={items.status}
                    duration={items.duration}
                    workTitle={items.workTitle}
                    type={items.type}
                    date={items.date}
                    taskTime={items.taskTime}
                    from={items.from}
                    To={items.To}
                    scheduled={items.scheduled}
                    recurring={items.recurring}
                    accepted={items.accepted}
                    delayed={items.delayed}
                    requests={items.requests}
                    complaint={items.complaint}
                    rating={items.rating}
                    onTime={items.onTime}
                    onNotify={handleNotifyStaff}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <BottomNavigationBar />
      </div>
    </div>
  );
};

export default LandingPage;
