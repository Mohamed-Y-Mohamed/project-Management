// registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0QHxbf1x0ZFdMZVpbR39PIiBoS35RckVgW3lfdHFTQmBbWE10');


import React, { useState } from 'react';
import { extend, registerLicense } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/kanban.css";
import { kanbanData } from "../datasource";

// Replace 'Your_Syncfusion_License_Key' with your actual Syncfusion license key.
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0QHxbf1x0ZFdMZVpbR39PIiBoS35RckVgW3lfdHFTQmBbWE10');

function Kanban() {
    const initialData = extend([], kanbanData, null, true);
    const [data, setData] = useState(initialData);
    const [columns, setColumns] = useState([
        { headerText: 'Open', keyField: 'Open', allowToggle: true },
        { headerText: 'InProgress', keyField: 'InProgress', allowToggle: true },
        { headerText: 'Testing', keyField: 'Testing', allowToggle: true },
        { headerText: 'Close', keyField: 'Close', allowToggle: true },
        { headerText: 'Validate', keyField: 'Validate', allowToggle: true }
    ]);

    const addNewCard = () => {
        const summary = prompt("Enter task summary:");
        const newId = data.length + 1;
        setData([...data, {
            Id: newId, 
            Status: 'Open', // Default status
            Summary: summary, 
            Type: 'Task', // Default type
            Priority: 'Normal', // Default priority
            Tags: '', // Default tags
            Estimate: 0, // Default estimate
            Assignee: '', // Default assignee
            RankId: newId
        }]);
    };

    const editCardDetails = (cardId) => {
        let card = data.find(card => card.Id === cardId);
        if (!card) return;

        const summary = prompt("Edit task summary:", card.Summary) || card.Summary;
        const status = prompt("Edit task status:", card.Status) || card.Status;
        const type = prompt("Edit task type:", card.Type) || card.Type;
        const priority = prompt("Edit task priority:", card.Priority) || card.Priority;
        const tags = prompt("Edit task tags:", card.Tags) || card.Tags;
        const estimate = prompt("Edit task estimate:", card.Estimate) || card.Estimate;
        const assignee = prompt("Edit task assignee:", card.Assignee) || card.Assignee;

        const updatedData = data.map(item => {
            if (item.Id === cardId) {
                return { ...item, Summary: summary, Status: status, Type: type, Priority: priority, Tags: tags, Estimate: estimate, Assignee: assignee };
            }
            return item;
        });

        setData(updatedData);
    };

    return (
        <div className="App">
            <div className="kanban-toolbar" style={{ marginTop: "5%", marginBottom: '20px' }}>
                <button onClick={addNewCard} className="btn btn-primary" style={{ marginLeft: "20%", marginRight: '20%' }}>Add New Card</button>
                <button onClick={() => {}} className="btn btn-success" style={{ marginRight: '20%' }}>Add New Column</button> {/* Placeholder for Add New Column */}
                <button onClick={() => {}} className="btn btn-danger">Delete Column</button> {/* Placeholder for Delete Column */}
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

export default Kanban;
