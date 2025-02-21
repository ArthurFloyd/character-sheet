import s from './AvatarPopup.module.scss';

import {Button, Dialog, DialogContent, DialogTitle} from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const AvatarPopup = () => {
  const handleClose = () => {};

  const onSubmitHandler = () => {};

  return (
    <Dialog
      className={s.container}
      onClose={handleClose}
      open={() => console.log('popup')}
    >
      <form onSubmit={onSubmitHandler}>
        <header className={s.header}>
          <DialogTitle className={s.title}>Добавьте аватар</DialogTitle>
          <div onClick={handleClose}>
            <ClearOutlinedIcon />
          </div>
        </header>
        <DialogContent>
          <Button
            variant="contained"
            title="Загрузить файл"
            component="label"
            // color="success"
            className={s.button}
          >
            Загрузить
            <input type="file" accept=".jpg, .jpeg, .png" hidden multiple />
          </Button>
        </DialogContent>
        <footer className={s.footer}>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type="submit">Сохранить</Button>
        </footer>
      </form>
    </Dialog>
  );
};

export default AvatarPopup;
