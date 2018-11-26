

import isInclude from 'test-module'
export default ()=>{
    if(isInclude(['a', 'b', 'c'], 'c')) {
        return 'test01 file'
    }
}

