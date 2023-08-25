import { TimeTrackerContainer, TimeTrackerCardWrapper, ArrowRightIcon } from "./styles"

const TimeTracker = () => {
  return (
    <TimeTrackerContainer>
        <TimeTrackerCardWrapper>
            <div>
              <h2>Time Tracker</h2>
              <p>Time spent on tasks</p>
            </div>

            <div>
                <ArrowRightIcon />
            </div>
        </TimeTrackerCardWrapper>
    </TimeTrackerContainer>
  )
}

export default TimeTracker