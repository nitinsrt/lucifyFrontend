import React from "react";

interface TaskCardProps {
  id: String;
  currentStatus: String;
  duration: String;
  workTitle: String;
  type: String;
  date: String;
  taskTime: String;
  from: String;
  To: String;
  scheduled: boolean;
  recurring: boolean;
  accepted: boolean;
  delayed: boolean;
  requests?: itemList[];
  onTime?: boolean;
  complaint?: boolean;
  rating?: Number;
  onNotify?: ()=> void
}

interface itemList {
  id: Number;
  itemName: String;
  quantity: String;
  instructions: String;
}

const TaskCards: React.FC<TaskCardProps> = (props) => {
  return (
    <div className="border border-[#B8B8B8] p-2 rounded-xl m-3 wrap  xl:w-[22.5rem] ">
      {/* First row */}
      <div className="flex w-full h-5 justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="bg-[#F7F7F7] flex items-center py-0.5 px-1 rounded">
            <img src="fork.png" className="w-3 h-3" alt="fork" />
            <p className="font-encode-sans-expanded-sb text-[0.75rem] text-[#1A0A02] ml-1">
              Rajesh
            </p>
            <img src="dot.png" className="w-2 h-2 ml-1" alt="dot" />
          </div>
          <div className="py-0.5 px-1 bg-[#F7F7F7] rounded-[1.25rem] ml-1.5">
            {props.currentStatus === "Ongoing" && props.accepted && (
              <p className="text-[#F1AE11] text-[0.75rem] font-encode-sans-expanded-m">
                Ongoing
              </p>
            )}
            {props.currentStatus === "Ongoing" && !props.accepted && (
              <p className="text-[#CC2610] text-[0.75rem] font-encode-sans-expanded-m">
                Not Accepted
              </p>
            )}
          </div>
          {props.currentStatus === "History" && (
            <div
              className={`py-0.5 px-1 ${
                props.onTime ? "bg-[#00A441]" : "bg-[#CC2610]"
              } rounded-[1.25rem] ml-1.5`}
            >
              {props.onTime ? (
                <p className="text-white  text-[0.625rem] font-montserrat font-semibold">
                  On-Time
                </p>
              ) : (
                <p className="text-white  text-[0.625rem] font-montserrat font-semibold">
                  Delayed
                </p>
              )}
            </div>
          )}
          {props.currentStatus === "History" && props.complaint && (
            <div
              className={`py-0.5 px-1 bg-[#CC2610] rounded-[1.25rem] ml-1.5`}
            >
              <p className="text-white  text-[0.625rem] font-montserrat font-semibold">
                Complaint
              </p>
            </div>
          )}
          {props.currentStatus != "History" && (
            <div className="ml-1.5">
              <img src="type.png" className="w-4 h-4" alt="type" />
            </div>
          )}
        </div>
        {!props.delayed && props.currentStatus === "Ongoing" && (
          <div className="py-0.5 px-1 bg-[#D7FFE7] rounded-[1.25rem] flex items-center">
            <img src="greenClock.png" className="w-4 h-4 mr-0.5" alt="clock" />
            <p className="font-montserrat font-medium text-[#00A441] text-[0.625rem]">
              {props.duration}
            </p>
          </div>
        )}
        {props.delayed && props.currentStatus === "Ongoing" && (
          <div className="py-0.5 px-1 bg-[#F4D8D8] rounded-[1.25rem] flex items-center">
            <img src="redClock.png" className="w-4 h-4 mr-0.5" alt="clock" />
            <p className="font-montserrat font-medium text-[#CC2610] text-[0.625rem]">
              {props.duration}
            </p>
          </div>
        )}
        {props.currentStatus === "History" && props.rating && (
          <div
            className={`py-0.5 px-2 ${
              props.rating <= 2
                ? "bg-[#CC2610]"
                : props.rating === 3
                ? "bg-[#F1AE11]"
                : "bg-[#00A441]"
            } rounded-[1.25rem] flex items-center nowrap`}
          >
            <p className="font-montserrat font-medium text-white text-[0.625rem]">
              {props.rating.toString()}
            </p>
            <img src="star.png" className="w-3 h-3 ml-1" alt="clock" />
          </div>
        )}
      </div>
      {/* Second row */}
      <div className="flex w-full h-5 justify-between items-center mt-3">
        <div className="flex items-center w-3/4">
          <p className="font-encode-sans-expanded-sb text-xs text-[#1A0A02]">
            {props.workTitle}
          </p>
        </div>
        <div className="py-0.5 px-1 bg-[#F7F7F7] rounded-[1.25rem] ml-1.5">
          <p
            className={`${
              props.type === "Internal Task"
                ? "text-[#5F69C7]"
                : "text-[#DC5B19]"
            } text-[0.625rem] font-montserrat text-nowrap`}
          >
            {props.type}
          </p>
        </div>
      </div>
      <div className="flex w-full h-5 justify-between items-center mt-3">
        <div className="flex items-center w-3/4">
          <img src="Vector.png" className="w-[0.75rem] h-[0.833rem]" />
          <p className="text-[#767676] text-[0.625rem] font-montserrat ml-1 font-medium">
            {props.date} | {props.taskTime}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-[#767676] text-[0.625rem] font-montserrat ml-1 font-medium">
            {props.id}
          </p>
        </div>
      </div>
      <div className="flex w-full h-5 justify-between items-center mt-3">
        <div className="flex items-center w-3/4">
          <p className="text-[#767676] text-[0.75rem] font-encode-sans-expanded-sb">
            From:{props.from}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-[#767676] text-[0.75rem] font-encode-sans-expanded-sb ">
            To:{props.To}
          </p>
        </div>
      </div>
      {props.requests && props.requests.length > 0 && (
        <div className=" wrap bg-[#F7F7F7] p-3">
          {props.requests.map((items) => (
            <div className="flex justify-start flex-col">
              <div className="flex flex-row justify-start">
                <p className=" font-montserrat font-bold text-[0.75rem] text-[#1A0A02]">
                  {items.itemName}
                </p>
                <p className="font-montserrat font-normal text-[0.75rem] text-[#5D5E60] ml-1">
                  {items.quantity}
                </p>
              </div>
              {items.instructions && items.instructions.length > 0 && (
                <p className="font-montserrat font-medium text-[0.75rem] text-[#5F69C7] flex justify-start">
                  Instructions: {items.instructions}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      {props.currentStatus === "Ongoing" && !props.accepted && (
        <div className="flex w-full h-9 justify-between items-center mt-3 hover:cursor-pointer" onClick={props.onNotify}>
          <div
            className={`h-9 ${
              props.currentStatus === "Ongoing" &&
              !props.accepted &&
              !props.delayed
                ? "bg-[#5F69C7]"
                : "bg-[#CC2610]"
            } rounded-[1.25rem] px-3 py-2 w-full flex flex-row justify-center items-center`}
          >
            <img src="tick.png" className="mr-1 w-5 h-5" />
            <p className="text-[#FFECE2] text-[0.75rem] font-encode-sans-expanded-m">
              Notify Staff 
            </p>
          </div>
        </div>
      )}
      {(props.currentStatus === "Scheduled" ||
        props.currentStatus === "History") && (
          <div className="flex w-full h-9 justify-center items-center mt-3 border border-[#5F69C7] rounded-[1.25rem]">
            <p className="text-[#5F69C7] text-[0.75rem] font-encode-sans-expanded-m">
              View Details
            </p>
          </div>
        )}
    </div>
  );
};

export default TaskCards;
