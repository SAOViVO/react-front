export const Notifications = () => {
    const notifications = [
    'Elegi el input y el Output',
    'Input y output cargados exitosamente',
    'Ya podés iniciar la transmision',
  ]
  return (
        <div className="h-64">
            <h3 className='font-bold text-xl font-poppins'>Notificaciones</h3>
            <div className='w-full h-4/5 border-[#828282] border border-solid
                            flex flex-col p-4 rounded-lg'>
                {notifications.reverse().map((el, i) => (
                    <h3 className={`font-poppins text-lg
                    ${i === notifications.length -1 && 'text-[#BDBDBD]'}`}>{el}
                    </h3>
                ))}
            </div>
        </div>
  )
}
