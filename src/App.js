// import React from 'react';
// import './App.css';
// import MyMap from './map';
// function App() {
//   const markers = [
//     { latitude: 51.505, longitude: -0.09, description: 'Marker 1 Description' },
//     { latitude: 51.515, longitude: -0.1, description: 'Marker 2 Description' },
//     // Add more markers as needed
//   ];

//   return (
//     <div className="App">
//       <h1>Multiple Pins on Map</h1>
//       <MyMap markers={markers} />
//     </div>
//   );


//   }
// export default App;


// registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0QHxbf1x0ZFdMZVpbR39PIiBoS35RckVgW3lfdHFTQmBbWE10');

// Register your Syncfusion license
import React, { useState } from 'react';
import { extend,registerLicense } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { kanbanData } from './datasource';
import Navbar from './components/navbar';
 registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0QHxbf1x0ZFdMZVpbR39PIiBoS35RckVgW3lfdHFTQmBbWE10');

function App() {
    const initialData = extend([], kanbanData, null, true);
    const [data, setData] = useState(initialData);
    const [columns, setColumns] = useState([
        { headerText: 'To Do', keyField: 'To Do', allowToggle: true },
        { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
        { headerText: 'Review', keyField: 'Review', allowToggle: true },
        { headerText: 'Completed', keyField: 'Completed', allowToggle: true }
    ]);

    const addNewCard = () => {
        const summary = prompt("Enter task summary:");
        // Directly add to "To Do" if no status is provided
        setData([...data, { Summary: summary, Status: 'To Do', Id: `Task${data.length + 1}` }]);
    };

    const addNewColumn = () => {
        const headerText = prompt("Enter column name:");
        // Simplify the addition process
        if (headerText) {
            setColumns([...columns, { headerText, keyField: headerText, allowToggle: true }]);
            // Automatically add an example card to the new column
            setData([...data, { Summary: `Example in ${headerText}`, Status: headerText, Id: `Task${data.length + 1}` }]);
        }
    };

    const deleteColumn = () => {
        const columnHeaderText = prompt("Enter the header text of the column you wish to delete:");
        if (columnHeaderText) {
            const updatedColumns = columns.filter(column => column.headerText !== columnHeaderText);
            setColumns(updatedColumns);
            const updatedData = data.filter(card => card.Status !== columnHeaderText);
            setData(updatedData);
        }
    };

    const editCardDetails = (cardId) => {
        // Find card by Id
        let card = data.find(card => card.Id === cardId);
        if (!card) return;

        const summary = prompt("Edit task summary:", card.Summary);
        const status = prompt("Edit task status:", card.Status);

        // Update card details
        const updatedData = data.map(item => {
            if (item.Id === cardId) {
                return { ...item, Summary: summary, Status: status };
            }
            return item;
        });

        setData(updatedData);
    };

    // Example usage of editCardDetails. Adjust as necessary for your UI/event handlers.
    // This is to show where you might trigger edits. In a real app, you'd likely trigger this
    // from a card-specific action like clicking an "edit" button on the card.
    // editCardDetails("Task1");
       
    

    return (
        <div className="App">
            <Navbar />
            <div className="kanban-toolbar" style={{ marginTop: "5%", marginBottom: '20px' }}>
                <button onClick={addNewCard} className="btn btn-primary" style={{marginLeft:"20%", marginRight: '20%' }}>Add New Card</button>
                <button onClick={addNewColumn} className="btn btn-success" style={{ marginRight: '20%' }}>Add New Column</button>
                <button onClick={deleteColumn} className="btn btn-danger">Delete Column</button>
            </div>
            <KanbanComponent
                id="kanban"
                keyField="Status"
                dataSource={data}
                cardSettings={{ contentField: "Summary", headerField: "Id" }}
                style={{ marginTop: '20px' }}
            >
                <ColumnsDirective>
                    {columns.map((column, index) => (
                        <ColumnDirective key={index} headerText={column.headerText} keyField={column.keyField} allowToggle={column.allowToggle} />
                    ))}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
}

export default App;