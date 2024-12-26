// import logo from './logo.svg';
import './App.css';
// import GetNewHabit from './components/GetNewHabit';
import HabitListTable from './components/HabitListTable';
import HabitTrackerTitle from './components/HabitTrackerTitle';
// const rows= [ 
//   {
//     habitName: 'Daily Plank',
//     habitDescription: 'I will be doing plank for two minutes daily at 7:00 am in the morning at my home',
//     habitStatus: 'done',
//     id: new Date().getTime()
//   },
//   {
//     habitName: 'Daily Meditation',
//     habitDescription: 'I will meditate daily for 15 minutes at my home in the morning 6:30 am',
//     habitStatus: 'missed'
//   },
//   {
//     habitName: 'Daily read book',
//     habitDescription: 'I will read 3 pages of book daily at night before going to bed',
//     habitStatus: 'pending'
//   }
// ]

function App() {
  
  return (
    <div className="App">
      <HabitTrackerTitle/>
      <HabitListTable/>
    </div>
  );
}

export default App;
