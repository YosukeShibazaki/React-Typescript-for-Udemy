import React, { useState } from 'react';
import Hello from './components/Hello';

const App = () => {
  const [project, setProject] = useState<string | null>('TypeScript'); // 型はジェネリクスで渡せる。渡さなくても推論される。
  // どんな型にしたらいいか等が分からなかったらマウスホバーをさせる。
  return (
    <div>
      <Hello message={project}/>
    </div>
  );
}

export default App;
