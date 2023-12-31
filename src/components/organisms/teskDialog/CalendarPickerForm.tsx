import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import 'react-day-picker/dist/style.module.css';
import './data/calendarPicker.css';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import Button from '@/components/atoms/button/Button';
import { useCalendarPickerForm } from './CalendarPickerForm.hook';
import { CalendarPickerFormProps } from './taskDialog.types';
import { enUS, ko } from 'date-fns/locale';

const CalendarPickerForm = ({
  taskDate,
  handleSetFormValue,
  handleSetTaskFormStep,
}: CalendarPickerFormProps) => {
  const { t, lng, selected, onSelect, handleSaveDate } = useCalendarPickerForm(
    taskDate,
    handleSetFormValue,
    handleSetTaskFormStep,
  );
  return (
    <div className="flex flex-col">
      <div className="flex-auto">
        <DayPicker
          locale={lng === 'en' ? enUS : ko}
          mode="single"
          selected={selected}
          onSelect={(date) => onSelect(date)}
          showOutsideDays
          defaultMonth={selected}
        />
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <Button
            variant="text"
            className="w-full"
            onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.MAIN)}
          >
            {t('button.cancel')}
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveDate}
          >
            {t('button.choose_time')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPickerForm;
