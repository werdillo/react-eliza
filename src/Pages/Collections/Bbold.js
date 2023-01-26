import React from 'react'
import CollectionItem from './CollectionItem'
import Bbold_sofa from './BboldItems/BboldSofas';
import { useTranslation } from 'react-i18next';

export default function Bbold() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Pages.collection.sofas"),
      path: "sofa",
      data: Bbold_sofa,
    }
  ]
  return (
    <CollectionItem data={data} collection="bbold" />
  )
}