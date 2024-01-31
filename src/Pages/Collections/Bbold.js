import React from 'react'
import CollectionItem from './CollectionItem'
import Bbold_sofa from './BboldItems/BboldSofas';
import Bbold_beds from './BboldItems/BboldBeds';
import { useTranslation } from 'react-i18next';

export default function Bbold() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Pages.collection.sofas"),
      path: "sofa",
      data: Bbold_sofa,
    },
    {
      title: t("Pages.collection.beds"),
      path: "bed",
      data: Bbold_beds,
    },
  ]
  return (
    <CollectionItem data={data} collection="bbold" />
  )
}