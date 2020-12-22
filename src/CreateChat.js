import React, { useState } from "react";
import "./CreateChat.css";
import db from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const CreateChat = () => {
    const [chatName, setChatName] = useState("");
    const [description, setDescription] = useState("");
    const [{}, dispatch] = useStateValue();

    const createChatRoom = () => {
        db.collection("rooms").add({
            name: chatName,
            description: description !== "" ? description : "No description",
        });
        setChatName("");
        setDescription("");
        dispatch({
            type: actionTypes.CLOSE_MODAL,
            modal: false
        });
    };

    const cancelModal = () => {
        dispatch({
            type: actionTypes.CLOSE_MODAL,
            modal: false
        });
    };

    return (
        <div className="createChat">
            <h2>Create chat Room</h2>
            <p>Chat name</p>
            <input
                type="text"
                placeholder="Type a room name"
                value={chatName}
                onChange={(event) => {
                    setChatName(event.target.value);
                }}
            />
            <p>Chat description</p>
            <input
                type="text"
                placeholder="Type a description"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            <div className="createChat__buttons">
                <button
                    className="createChat__buttonSuccess"
                    onClick={createChatRoom}>
                    Create
                </button>
                <button
                    onClick={cancelModal}
                    className="createChat__buttonCancel">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default CreateChat;
