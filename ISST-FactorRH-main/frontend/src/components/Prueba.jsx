import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";

const Prueba = () => {
  // Datos de ejemplo
  const allItems = [
    { id: 1, name: "Elemento 1" },
    { id: 2, name: "Elemento 2" },
    { id: 3, name: "Elemento 3" },
    { id: 4, name: "Elemento 4" },
    { id: 5, name: "Elemento 5" }
  ];

  // Estado para almacenar el filtro actual
  const [filter, setFilter] = useState("");

  // Función para actualizar el filtro
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Función de filtrado
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Renderizar cada elemento de la lista
  const renderItem = ({ index, style }) => (
    <div>{filteredItems[index].name}</div>
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filtrar por nombre"
      />
      <List
        height={300} // Altura de la lista
        itemCount={filteredItems.length} // Cantidad total de elementos filtrados
        itemSize={50} // Altura de cada elemento
        width={200} // Ancho de la lista
      >
        {renderItem} {/* Función de renderizado para cada elemento */}
      </List>
    </div>
  );
};

export default Prueba;
