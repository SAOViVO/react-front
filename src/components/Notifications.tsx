interface IMessage {
    message: string,
    status: number,
}
interface Props {
    notifications: Array<IMessage>
}
export const Notifications = ({ notifications } : Props) => {
  return (
        <div className="h-64">
            <h3 className='font-bold text-xl font-poppins'>Notificaciones</h3>
            <div className='w-full h-4/5 border-[#828282] border border-solid
                            flex flex-col p-4 rounded-lg overflow-y-auto'>
                {notifications.map((el, i) => (
                    <h3 key={el.message} className={`font-poppins text-lg
                    ${i === notifications.length -1 && 'text-[#BDBDBD]'}`}>{el.message}
                    </h3>
                ))}
            </div>
        </div>
  )
}
