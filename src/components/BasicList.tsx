import '../App.css';
import { ThreadItem } from './ThreadItem';
import { Thread } from '../types/Thread';

import React from 'react';

const BasicList: React.FC = () => {
    const threads: Thread[] = [
        { id: 1, title: 'Web Development Concepts', author: 'Aiken' },
        { id: 2, title: 'Inspirational Quotes', author: 'Benedict' },
        { id: 3, title: 'Debugging Help', author: 'Casey' },
    ];

    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <h4>{'Welcome to my forum!'}</h4>
            <ul>
                {threads.map((thread) => (
                    <ThreadItem thread={thread} key={thread.id} />
                ))}
            </ul>
        </div>
    );
};

export default BasicList;
