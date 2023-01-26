import React from 'react'
import CollectionItem from './CollectionItem'
import SophisticatedLiving_beds from './SophisticatedLivingItems/SophisticatedLivingBeds';
import SophisticatedLiving_chair from './SophisticatedLivingItems/SophisticatedLivingChairs';
import SophisticatedLiving_sofa from './SophisticatedLivingItems/SophisticatedLivingSofas';

import { useTranslation } from 'react-i18next';

export default function SophisticatedLiving() {
	const { t } = useTranslation();
	const data = [
		{
			title: t("Pages.collection.sofas"),
			path: "sofa",
			data: SophisticatedLiving_sofa,
		},
		{
			title: t("Pages.collection.chairs"),
			path: "chair",
			data: SophisticatedLiving_chair,
		},
		{
			title: t("Pages.collection.beds"),
			path: "beds",
			data: SophisticatedLiving_beds,
		},
	]
	return (
		<CollectionItem data={data} collection="sophisticated-living" />
	)
}