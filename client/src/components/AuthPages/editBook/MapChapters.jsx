import React from "react";
import { Anchor, Descriptions } from 'antd';

const { Link } = Anchor;

export const MapChapters = ({ chapters }) => {
    return (
        <Anchor >
            <Link href="#content" title="Описание" />
            {chapters.map((chapter, index) => {
                return <Link href={`#${index + 1}`} title={`Глава ${index + 1}. ${chapter.title}`} key={chapter._id} />;
            })}
        </Anchor>
    )
}