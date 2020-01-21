import React, { useState } from 'react';

const useSelect = (stateInitial, options) => {
    const [state , setState] = useState('');
    const SelectNews = () => (
        <select
            className="browser-default"

        >
            <option value = "">Seleccione</option>

        </select>
    );
    return [state, SelectNews];
}



export default useSelect;