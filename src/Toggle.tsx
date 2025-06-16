
const ComponentA = () => <div>Component A is visible</div>;
const ComponentB = () => <div>Component B is visible</div>;

import  { useState } from 'react'

const Toggle = () => {

    const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='text-center'>
      <label>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={() => setIsToggled(prev => !prev)}
        />
        Toggle Components
      </label>

      <div style={{ marginTop: '20px'}}>
        {isToggled ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  )
}

export default Toggle