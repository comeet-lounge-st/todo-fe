import { TASK_FORM_STEP, AddTask } from '@/types/task/task.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';

interface TaskFilter {
  word?: string;
  period?: string;
  isCompleted?: boolean;
}

export interface TaskSliceState {
  taskFormStep: TASK_FORM_STEP;
  isShowModal: boolean;
  task: AddTask;
  filter: TaskFilter;
}

const initialState: TaskSliceState = {
  taskFormStep: TASK_FORM_STEP.MAIN,
  isShowModal: false,
  filter: {},
  task: {
    title: '',
    description: '',
    priority: 5,
    taskDate: format(new Date(), 'yyyy-MM-dd'),
    taskTime: '00:00:00',
    isCompleted: false,
    category: {
      _id: '',
    },
  },
};

const taskSlice = createSlice({
  name: 'taks',
  initialState,
  reducers: {
    setTaskFormStep: (
      state,
      { payload: taskFormStep }: PayloadAction<TASK_FORM_STEP>,
    ) => {
      state.taskFormStep = taskFormStep;
    },
    setIsShoModal: (state, { payload: isShowModal }: PayloadAction<boolean>) => {
      state.isShowModal = isShowModal;
    },
    setTaskFormData: (
      state,
      { payload: taskFormData }: PayloadAction<Partial<AddTask>>,
    ) => {
      state.task = { ...state.task, ...taskFormData };
    },
    setFilter: (state, { payload: filter }: PayloadAction<Partial<TaskFilter>>) => {
      state.filter = { ...state.filter, ...filter };
    },
  },
});

export default taskSlice;
