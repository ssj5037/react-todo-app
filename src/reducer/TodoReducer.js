export default function TodoReducer(todos, action) {
    switch (action.type) {
        case 'insert': {
            break;
        }
        default: {
            throw new Error(`액션 타입 오류입니다. ${action}`);
        }
    }
}