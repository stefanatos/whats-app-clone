import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import db from "./firebase";

const SidebarChat = ({ addNewChat, showBackdrop, id, name, description }) => {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    useEffect(() => {
        db.collection("rooms")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
    }, [id]);

    const onCreateNewChat = () => {
        showBackdrop(true);
    };


    const onDeleteRoom = () => {
        db.collection('rooms').doc(id).delete().catch(e => alert(e));
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarchat">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="sidebarchat__info">
                    <h2>{name}</h2>
                    <p className="sidebarchat__infoDescripion">{description}</p>
                    <p>{messages[0]?.message}</p>
                </div>
                <button className="sidebarchat__delete" onClick={onDeleteRoom}>x</button>
            </div>
        </Link>
    ) : (
        <div onClick={onCreateNewChat} className="sidebarchat">
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SidebarChat;
