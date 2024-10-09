import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IncomeBracket from './IncomeBracket';
import Game3ConnectingLink from './Game3ConnectingLink';

function RuleBoard() {
  return (
    <Routes>
      <Route path="/features/ruleboard" element={<IncomeBracket />} />
      <Route path="/gameconnect" element={<Game3ConnectingLink />} />
    </Routes>
  );
}

export default RuleBoard;
