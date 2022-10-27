import { Thread } from '../types/Thread';

import React from 'react';

export const ThreadItem: React.FC<{ thread: Thread }> = ({ thread }) => {
    return <li>{thread.title + ' by ' + thread.author}</li>;
};
